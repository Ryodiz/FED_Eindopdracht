/**
 * Created by Roy on 6/9/2017.
 */
import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the Cameras
 *
 * @constructor
 */
const RoverCameras = View.extend({
    templateCameras: '',
    templateError: '',

    initialize: function ()
    {

        //Set templates to use later on
        this.templateCameras = _.template(this.$('#template-cameras').html());
        this.templateError = _.template(this.$('#template-cameraError').html());

        //Listen to global events for change of new club
        App.events.on('newSearch', this.loadCameras, this);
    },

    /**
     * Wrapper function to load the cameras through the collection
     *
     * @param data
     */
    loadCameras: function (data)
    {
        this.collection.loadCamerasFromRover(data.rover, data.sol);
        this.collection.fetch({
            success: (collection) => this.loadCamerasSuccessHandler(collection),
            error: (collection, response) => this.loadCamerasErrorHandler(collection, response),
            data: {
                sol: data.sol,
                page: 0
            }
        });
    },

    /**
     * Success Handler will add HTML of cameras to this $el
     *
     * @param collection
     */
    loadCamerasSuccessHandler: function (collection)
    {
        this.$el.html(this.templateCameras({cameras: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadCamerasErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default RoverCameras;
