// Content providers register data here; views never need to know the source file names.
globalThis.RDMContent=(()=>{
 const banks=new Map();
 function freeze(value){if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value)}return value}
 return Object.freeze({
  register(name,bank){if(banks.has(name))throw Error('Duplicate content bank: '+name);if(bank?.schemaVersion!==1)throw Error('Unsupported content schema: '+name);banks.set(name,freeze(bank))},
  get(name){if(!banks.has(name))throw Error('Missing content bank: '+name);return banks.get(name)}
 });
})();
