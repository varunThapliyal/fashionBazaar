import {createSelector} from 'reselect';


const DirectoryItems = state=>state.Directory;


export const HomepageItems=createSelector(
    [DirectoryItems],
    Directory=> Directory.sections 
)