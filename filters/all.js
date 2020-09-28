const filter = module.exports;

function tree(path) {
    const filteredPaths = path.split('.').filter(Boolean);
    if (!filteredPaths.length) return;
    const dottedPath = filteredPaths.join('.');

    return `${dottedPath}.`;
};
filter.tree = tree;

function buildPath(propName, path) {
    if (!path) return propName;
    return `${path}.${propName}`;
};
filter.buildPath = buildPath;

function isRequired(obj, key) {
    return obj && Array.isArray(obj.required) && !!(obj.required.includes(key));
};
filter.isRequired = isRequired;

function acceptedValues(items) {
    if (!items) return '_Any_';

    return '_One of_ ' + items.map(i => `\`${i}\``).join(', ');
};
filter.acceptedValues = acceptedValues;