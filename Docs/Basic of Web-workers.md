
# Basics of Web-Workers

* Messages
    - browser -> postMessage -> onmessage -> worker
    - copy data or transfer the data
    - object references are not passed. (when passed clones are created)
        
            let ab = new ArrayBuffer(32)
            let worker = new Worker('worker.js)

            // copy the object
            worker.postMessage(ab)

            // transfer the object
            // faster
            // but context is lost
            worker.postMessage(ab, [ab])
    
    - Message types

            a. primitive
            b. JSON Object
            c. File
            d. Blob
            e. Array Buffer
            ** functions are not allowed
            ** when sending a functions will throw a DataCloneError
    

* Available APIs
    - Standard APIs -> setTimeout etc.
    - WebSockets    -> for bi-direction data sharing
    - XHR and Fetch -> Allows to load resources
    - Promise       -> Apis support
    - IndexDB       -> Database of web app
    - Location      -> partial implementation
    - Navigator     -> ,,

* Using Additional Scripts
    - pulling additional scripts inside workers

            Inside workers
            importScripts function is available for importing scripts

            importScripts('pathToScriptOne', 'pathToScriptTwo') ...
            // this is a synchronous operation
     

* Types of Web workers
    - Dedicated Workers
        - dedicated to one instance of web-page (or one web-page)
        - single execution context
        - only throughout a application
    
    - Shared workers
        - shared across multiple execution contexts
        - means across multiple iFrames, browser tabs etc.
        - These act as singleton
        - These have additional ports property to receive message
        - Not widely above


* Life Cycle of Web workers
    - Dedicated Workers Life Cycle
        - create  : done by new Worker
        - destroy : two ways
            - close (from inside the worker)
            - terminate (from outside the worker)
        - <b>There is no way to check if worker is closed or not, be careful before destroying </b>
    
    - Shared Workers Life Cycle
        - create : done by new SharedWorker
        - connect : fired after create, inside the worker, allows the worker to store details about port so that it can send data back to ports later on
        - startup : one or both sides of shared workers has to call startup. if a worker wants to share data from another worker, it has to start a connection on its port.
        done by start()
        - destroy
            - close
            - worker.port.close() - only open ports can be closed
    

