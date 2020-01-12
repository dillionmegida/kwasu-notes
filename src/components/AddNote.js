import React from 'react';

const addDoc = {
    link: 'https://docs.google.com/document/d/1pXt9tNdFeb3i4-t86tQenX5gIZ7-qCHyAxrvKa1HvsI/edit?usp=sharing'
}

export default () => (
    <p>
        If you want to add notes (as a Class Representative or someone to represent him) for your department (at any level) on this platform, kindly <a href={addDoc.link}>go through this document</a>.
    </p>
)