/**
 * Created by Roy on 6/9/2017.
 */
import {View} from 'backbone';
import Router from '../routers/routerExtension';

/**
 * Object representing the actions
 *
 * @constructor
 */
const Actions = View.extend({
    router: null,
    selectUrl: '',
    selectUsed: false,

    // Event handlers
    events: {
        'click a': 'clickHandler',
        'change #camera': 'selectHandler'
    },

    initialize: function ()
    {
        this.selectUrl = '';
        this.selectUsed = false;
        //Initialize the router to activate navigation
        this.router = new Router();
    },


    /**
     * Handler for select event, retrieve data attributes and navigate router
     */
    selectHandler: function ()
    {
        // get Url data
        let url;
        if(this.selectUsed){
            url = this.selectUrl;
        }
        else{
            this.selectUrl = Backbone.history.getFragment();
            this.selectUsed = true;
            url = this.selectUrl;
        }

        //Get camera data if present and add to Url
         if(this.$("#camera").val() != null){
            url = url + '/' + this.$("#camera").val();
        }

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
        this.router.trigger();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();
        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'photos/' + target.dataset['rover'] + '/' + target.dataset['sol'];

        console.log('clicked' + url);
        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default Actions;
