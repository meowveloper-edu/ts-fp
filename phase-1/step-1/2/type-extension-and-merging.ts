interface Basic_User_Interface {
    id : string;
    username : string;
}

interface User_Profile_Interface {
    email : string;
    last_login : Date;
}

interface Full_User_Interface extends Basic_User_Interface, User_Profile_Interface {
    // Can add more properties specific to FullUser here if needed
}

type Log_Function_Type = (message : string, level? : 'info' | 'warning' | 'error') => void;

// First declaration (e.g., from a library)
interface Analytics_Interface {
    track_event(event_name : string) : void;
}

interface Analytics_Interface {
    set_user_id(user_id : string) : void;
}

type Extended_Log_Function_Type = Log_Function_Type & { timestamp : number };

const current_user : Full_User_Interface = {
    id : '123',
    username : 'username',
    email : 'email',
    last_login : new Date(),
}
console.log(`Current User: ${current_user.username}, Email: ${current_user.email}`);

const my_logger : Log_Function_Type = (message, level = 'info') => {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

my_logger(`user logged in: ${current_user.username}`);

const global_analytics : Analytics_Interface = {
    track_event(event_name) {
        console.log('tracking event', event_name);
    },
    set_user_id(user_id) {
        console.log('setting analytics user id', user_id);
    }
}

global_analytics.track_event('page view');
global_analytics.set_user_id('1234');

const complex_logger : Extended_Log_Function_Type = Object.assign(my_logger, { timestamp : Date.now() });
complex_logger('this log has a time stamp');
console.log(`log timestamp: ${complex_logger.timestamp}`);


