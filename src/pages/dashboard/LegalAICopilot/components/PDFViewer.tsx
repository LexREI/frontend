import React, { useContext, useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import { DefaultContext } from '@/contexts/default_context';
import { useAppSelector } from '@/hooks/useReduxHooks';

function PDFViewer() {
  const { page, document, searchText } = useAppSelector(
    (state) => state.chatbot
  );
  const { setErrorDescription, setProcessLoading, setProcessLoadingTitle } =
    useContext(DefaultContext);

  const viewerDiv = useRef<HTMLDivElement>(null);

  const [documentViewerCopy, setDocumentViewerCopy] = React.useState<any>(null);
  const [instanceCopy, setInstanceCopy] = React.useState<any>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey:
          'demo:1691513661169:7c59c080030000000059df490fe6ee6dde785e616981a571e9dd27ab4b',
        initialDoc: '',
        fullAPI: true,
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {
      // console.log('instant: ', instance.Core.documentViewer.getPageCount());
      const { documentViewer, annotationManager, Annotations, Search } =
        instance.Core;
      instance.UI.disableElements(['toolbarGroup-Shapes']);
      setInstanceCopy(instance);
      setDocumentViewerCopy(documentViewer);

      documentViewer.setSearchHighlightColors({
        // setSearchHighlightColors accepts both Annotations.Color objects or 'rgba' strings
        searchResult: new Annotations.Color(165, 217, 255, 0.8),
        activeSearchResult: 'rgba(165, 217, 255, 0.8)',
      });
    });
  }, []);

  const HighlightText = (text: string) => {
    const { documentViewer, annotationManager, Annotations, Search } =
      instanceCopy.Core;
    const mode = Search.Mode.PAGE_STOP | Search.Mode.HIGHLIGHT;
    const searchOptions = {
      // If true, a search of the entire document will be performed. Otherwise, a single search will be performed.
      fullSearch: true,
      // The callback function that is called when the search returns a result.
      onResult: (result: {
        resultCode: number;
        quads: { getPoints: () => any }[];
        pageNum: number;
      }) => {
        // with 'PAGE_STOP' mode, the callback is invoked after each page has been searched.
        if (result.resultCode === Search.ResultCode.FOUND) {
          for (let i = 0; i < result.quads.length; i++) {
            const quad = result.quads[i].getPoints();
            const annot = new Annotations.TextHighlightAnnotation({
              PageNumber: result.pageNum,
              Quads: [quad],
              StrokeColor: new Annotations.Color(165, 217, 255, 0.8),
            });

            annotationManager.addAnnotation(annot);
            annotationManager.redrawAnnotation(annot);
          }
        }
      },
    };

    documentViewer.textSearchInit(text, mode, searchOptions);
  };

  useEffect(() => {
    try {
      if (document === '') return;
      documentViewerCopy.loadDocument(document, {
        filename: 'document.pdf',
      });
    } catch (err: any) {
      setErrorDescription(err);
    } finally {
      setProcessLoading(false);
      setProcessLoadingTitle('');
    }
  }, [document]);

  useEffect(() => {
    documentViewerCopy?.setCurrentPage(page, false);
    if (documentViewerCopy) {
      HighlightText(searchText);
    }
  }, [page, searchText]);

  return (
    <section className={`border-r-2  ${document.length === 0 ? 'hidden' : ''}`}>
      <div className="prose webviewer h-full rounded-l-2xl" ref={viewerDiv} />
    </section>
  );
}

export default PDFViewer;
