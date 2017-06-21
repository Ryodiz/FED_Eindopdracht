/**
 * Created by Roy on 6/9/2017.
 */
import {Collection} from 'backbone';
import Photo from '../models/Photo';

/**
 * Collection for the photos endpoint
 *
 * @constructor
 */
let Photos = Collection.extend({
    model: Photo,
    url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt',

    parse: function(response, options){
        return response.photos;
    },

    /**
     * Method for setting up the correct Url before fetching the collection.
     *
     * @param rover
     * @param camera
     */
    loadPhotosFromRover(rover, camera = null){
        if(camera == null){
            this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt';
        }
        else {
            this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?camera=' + camera + '&api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt';
        }
    }
});

export default Photos;
