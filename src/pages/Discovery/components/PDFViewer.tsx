import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import examplePDF from '@/assets/pdf/Fair Labor Standards Act.pdf';
import examplePDF1 from '@/assets/pdf/example.pdf';
import { Button } from '@/components/ui/button';

type PDFViewerProps = {
  document: string;
  page: number;
  searchText: string;
};

function PDFViewer(props: PDFViewerProps) {
  const { document, page, searchText } = props;
  const viewerDiv = useRef<HTMLDivElement>(null);

  const [documentViewerCopy, setDocumentViewerCopy] = React.useState<any>(null);
  const [instanceCopy, setInstanceCopy] = React.useState<any>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey:
          'demo:1691513661169:7c59c080030000000059df490fe6ee6dde785e616981a571e9dd27ab4b',
        initialDoc: examplePDF,
        fullAPI: true,
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {
      // console.log('instant: ', instance.Core.documentViewer.getPageCount());
      const { documentViewer, annotationManager, Annotations, Search } =
        instance.Core;
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
    if (document === '') return;
    documentViewerCopy.loadDocument(document, {
      filename: 'document.pdf',
    });
  }, [document]);

  useEffect(() => {
    documentViewerCopy?.setCurrentPage(page, false);
    if (documentViewerCopy) {
      HighlightText(searchText);
    }
  }, [page, searchText]);

  return (
    <section className="border-l-2 border-r-2">
      <div className="prose h-[700px] webviewer" ref={viewerDiv} />
    </section>
  );
}

export default PDFViewer;
