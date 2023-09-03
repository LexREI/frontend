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
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {
      // console.log('instant: ', instance.Core.documentViewer.getPageCount());
      const { documentViewer, annotationManager } = instance.Core;
      setDocumentViewerCopy(documentViewer);
    });
  }, [page]);

  useEffect(() => {
    documentViewerCopy?.setCurrentPage(page, false);
  }, [page]);

  return <div className="h-[700px] webviewer" ref={viewerDiv} />;
}

export default PDFViewer;
