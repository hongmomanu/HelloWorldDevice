/**
 * Created by jack on 14-11-13.
 */
Ext.define('HelloWorld.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            imgbtn: {
                tap: 'doImgCLick'
            }
        },
        refs: {
            nav: 'main',
            imgbtn:'main #imagebtnCLick'
        }
    },
    doImgCLick:function(){
        Ext.device.Notification.show({
            title: 'One Button',
            message: 'This is a simple notification with one button.',

            callback: function(button) {
                //When the user taps a button, show another notification
                Ext.device.Notification.show({
                    message: 'You pressed: "' + button + '"'
                });
            }
        });
    }
});