const noteSlug = (dpt, lvl, set, sem, code) => `/${dpt}/${lvl}/${set}/${sem}/${code}`;

const textToLink = t => t.replace(" ", '-').toLowerCase();

const linkToText = link => {
    let spaced = link.replace("-", " ");
    return spaced;
}

export { noteSlug, textToLink, linkToText };

