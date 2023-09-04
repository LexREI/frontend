import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import examplePDF from '@/assets/pdf/Fair Labor Standards Act.pdf';

type PDFViewerProps = {
  page: number;
};

function PDFViewer(props: PDFViewerProps) {
  const { page } = props;
  const viewerDiv = useRef<HTMLDivElement>(null);
  const [documentViewerCopy, setDocumentViewerCopy] = React.useState<any>(null);
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
      setDocumentViewerCopy(documentViewer);

      documentViewer.setSearchHighlightColors({
        // setSearchHighlightColors accepts both Annotations.Color objects or 'rgba' strings
        searchResult: new Annotations.Color(0, 0, 255, 0.5),
        activeSearchResult: 'rgba(0, 255, 0, 0.5)',
      });

      documentViewer.addEventListener('documentLoaded', () => {
        console.log('documentload');
        const searchText =
          'bahwa tujuan pembangunan nasional adalah terciptanya suatu';
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
              const textQuad = result.quads[0].getPoints(); // getPoints will return Quad objects
              console.log('textqiad:', textQuad);
              const annot = new Annotations.TextHighlightAnnotation({
                PageNumber: result.pageNum,
                Quads: result.quads,
                StrokeColor: new Annotations.Color(255, 0, 0, 1),
              });

              annotationManager.addAnnotation(annot);
              annotationManager.redrawAnnotation(annot);
              // now that we have the result Quads, it's possible to highlight text or create annotations on top of the text
            }
          },
        };

        documentViewer.textSearchInit(searchText, mode, searchOptions);
      });
    });
  }, []);

  useEffect(() => {
    documentViewerCopy?.setCurrentPage(page, false);
  }, [page]);

  return <div className="prose h-[700px] webviewer" ref={viewerDiv} />;
}

export default PDFViewer;
