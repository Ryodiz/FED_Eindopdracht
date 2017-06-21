/**
 * Created by Roy on 6/9/2017.
 */
import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the Rovers
 *
 * @constructor
 */
const RoverDetails = View.extend({
    templateRovers: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateRovers = _.template(this.$('#template-rovers').html());
        this.templateError = _.template(this.$('#template-roverError').html());
        //initiate load function of rovers.
        this.loadRovers();
    },

    /**
     * Wrapper function to load the rovers through the collection
     */
    loadRovers: function ()
    {
        this.collection.fetch({
            success: (collection) => this.loadRoversSuccessHandler(collection),
            error: (collection, response) => this.loadRoversErrorHandler(collection, response)
        });
    },

    /**
     * Success Handler will add HTML of rovers to this $el
     *
     * @param collection
     */
    loadRoversSuccessHandler: function (collection)
    {
        this.$el.html(this.templateRovers({rovers: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadRoversErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default RoverDetails;