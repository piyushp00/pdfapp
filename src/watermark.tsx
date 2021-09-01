import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';

interface WaterMarkExampleProps {
    fileUrl: string;
}

export const WaterMarkExample: React.FC<WaterMarkExampleProps> = ({ fileUrl }) => {
    const fileType = ["application/pdf"];
    const renderPage: RenderPage = (props: RenderPageProps) => (

        <>
            {props.canvasLayer.children}
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        color: 'rgba(0, 0, 0, 0.2)',
                        fontSize: `${8 * props.scale}rem`,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                    }}
                >
                   Piyush Pandey
                </div>
            </div>
            {props.annotationLayer.children}
            {props.textLayer.children}
        </>
    );

    return <Viewer fileUrl={fileUrl} renderPage={renderPage} />;
};

export default WaterMarkExample;
