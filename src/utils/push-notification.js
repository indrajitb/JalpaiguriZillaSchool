import { database } from '..';
import webpush from 'web-push';
import api_keys from '../apikeys';

const cors = require('cors')({ origin: false });

export const pushNotification = (message, url, tag) => {

    cors("", "", function () {
        database.ref("subscriptions").once('value')
            .then(subscriptions => {
                subscriptions.forEach((sub) => {
    
                    var pushConfig = {
                        endpoint: sub.val().endpoint,
                        keys: {
                            //The following corresponds to the Firbase DB subscription values
                            auth: sub.val().keys.auth,
                            p256dh: sub.val().keys.p256dh
                        },
                    };
                    
                    //Second arg. is the publec key; Third arg. is the private key
                    webpush.setVapidDetails(api_keys.vapid_email,
                    api_keys.vapid_public_key,
                    api_keys.vapid_private_key);
                    
                    webpush.sendNotification(pushConfig, JSON.stringify({
                        title: 'You have a new notification',
                        content: `${message}`,
                        openUrl: `${url}`,
                        tag: tag
                    }))
                        .catch(function (err) {
                            console.error(err);
                        })
    
                })
            });
    });

}
