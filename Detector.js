var detector = {
    state: undefined,
    states: {
        idle: {
            initialize: function( target ) {
                this.target = target;
            },
            
            enter: function() {
                console.log("Entering state");
            },
            
            execute: function() {
                
            },
            
            handleRequest: function( request ) {
                if( request == receivedCase.CALLFORHELP ) addAlertMessage( "REQUEST: Call For Help", 1 );
                else if( request == receivedCase.NEEDJANITOR ) addAlertMessage( "REQUEST: Need Janitor", 2 );
                else if( request == receivedCase.NEEDREPAIRATION ) addAlertMessage( "REQUEST: Maintainance", 3 );
                else if( request == receivedCase.DETECTGAS ) addAlertMessage( "REQUEST: Detected Gas", 4 );
                else if( request == receivedCase.DETECTSOUND ) addAlertMessage( "REQUEST: Detected Sound", 5 );
            },
            
            handleMessage: function( message, type ) {
                if( type == receivedCase.CALLFORHELP ) {
                    addAlertMessage( message, 1 );
                } else if( type == receivedCase.NEEDJANITOR ) {
                    addAlertMessage( message, 2 );
                } else if( type == receivedCase.NEEDREPAIRATION ) {
                    addAlertMessage( message, 3 );
                } else if( type == receivedCase.DETECTGAS ) {
                    addAlertMessage( message, 4 ) {
                } else if( type == receivedCase.DETECTSOUND ) {
                    addAlertMessage( message, 5 );
                }
            },
            
            exit: function() {
                console.log("Changing state");
            }
            
        },
        
        working: {
            initialize: function( target ) {
                this.target = target;
            },
            
            enter: function() {
                console.log("Entering state");
            },
            
            execute: function() {
                
            },
            
            handleRequest: function( request ) {
                
            },
            
            handleMessage: function() {
                
            },
            
            exit: function() {
                console.log("Changing state");
            }
        }
        
    },
    changingState: function( state ) {
        if( this.state != state ) {
            this.state.exit();
            this.state = state;
            this.state.enter();
            this.state.execute();
        }
    }    
};
