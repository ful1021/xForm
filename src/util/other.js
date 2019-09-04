export function log(type, obj){
  if(null == obj) return;

  const fn = console[type] || console.log;
  const message = obj instanceof Error ? obj.message : obj.toString()

  fn(message);
}