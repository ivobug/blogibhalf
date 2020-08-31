export default function(context){
    console.log('ivoo')
    context.store.dispatch("initAuth",context.req)
    
    
}