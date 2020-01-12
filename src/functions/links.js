const noteSlug = (dpt, lvl, set, sem, code) => `/${dpt}/${lvl}/${set}/${sem}/${code}`;

const textToLink = t => t.replace(" ", '-').toLowerCase();

export { noteSlug, textToLink };

