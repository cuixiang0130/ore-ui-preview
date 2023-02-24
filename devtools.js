window.__REACT_FACET_DEVTOOLS_GLOBAL_HOOK__ = {
    listen:(callback) => {
        console.log(`[DevTools] Listen ${callback}`)
    },
    send:(message)=>{
        console.log(`[DevTools] Send ${message}`)
    }
}