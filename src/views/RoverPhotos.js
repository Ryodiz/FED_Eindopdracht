/**
 * Created by Roy on 6/9/2017.
 */
import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the Photos
 *
 * @constructor
 */
const RoverPhotos = View.extend({
    templatePhotos: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templatePhotos = _.template(this.$('#template-photos').html());
        this.templateError = _.template(this.$('#template-photoError').html());

        //Listen to global events for change of new search
        App.events.on('newSearch', this.loadPhotos, this);
    },

    /**
     * Wrapper function to load the photos through the collection
     *
     * @param data
     */
    loadPhotos: function (data) {
        //Check if camera data has been included, if so add to search parameter
        if (data.camera != null) {
            this.collection.loadPhotosFromRover(data.rover, data.camera);
        }
        else{
            this.collection.loadPhotosFromRover(data.rover);
        }

        this.collection.fetch({
            success: (collection) => this.loadPhotosSuccessHandler(collection),
            error: (collection, response) => this.loadPhotosErrorHandler(collection, response),
            data: {
                sol: data.sol,
                page: 0
            }
        })
    },

    /**
     * Success Handler will add HTML of photos to this $el
     *
     * @param collection
     */
    loadPhotosSuccessHandler: function (collection)
    {
        this.$el.html(this.templatePhotos({photos: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadPhotosErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default RoverPhotos;
