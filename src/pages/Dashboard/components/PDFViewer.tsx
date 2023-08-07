import { Viewer, Worker } from '@react-pdf-viewer/core';

function PDFViewer() {
  return (
    <section className="h-[600px] bg-white overflow-scroll">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="src/assets/pdf/example.pdf" />
      </Worker>
    </section>
  );
}

export default PDFViewer;
