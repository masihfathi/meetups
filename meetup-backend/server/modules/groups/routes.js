import {Router} from 'express';
import * as GroupController from './controller';
const routes = new Router();
routes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);
routes.post('/groups/new', GroupController.createGroup);
routes.get('/groups', GroupController.getAllGroups);
export default routes;
