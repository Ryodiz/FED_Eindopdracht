/**
 * Created by Roy on 6/9/2017.
 */
import {Router} from 'backbone';

/**
 * Router for processing URL's
 *
 * @constructor
 */
const routerExtension = Router.extend({
    routes: {
        'photos/:rover/:sol/:camera': 'PhotoAction',
        'photos/:rover/:sol': 'PhotoAction',
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param rover
     * @param sol
     * @param camera
     */
    PhotoAction: function (rover, sol, camera = null)
    {
        App.events.trigger('newSearch', {
            rover: rover,
            sol: sol,
            camera: camera
        });
    },

});

export default routerExtension;
