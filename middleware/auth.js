export default function(context){
    console.log('ivo123123o')
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth')
    }
} 