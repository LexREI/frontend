import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

function PDFViewer() {
  const viewerDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey:
          'demo:1691513661169:7c59c080030000000059df490fe6ee6dde785e616981a571e9dd27ab4b',
        initialDoc:
          'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {
      // const { docViewer } = instance;
      // docViewer.on('documentLoaded', () => {
      //   console.log('document loaded');
      // });
    });
  }, []);

  return <div className="h-[700px] webviewer" ref={viewerDiv} />;
}

export default PDFViewer;
