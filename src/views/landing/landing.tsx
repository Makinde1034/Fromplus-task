import React,{useEffect} from 'react';
import SearchAndSort from '../../components/searchAndSort/searchAndSort'
import Templates from '../../components/templates/templates';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';
import api from '../../api';
import { useAppDispatch,useAppSelector } from '../../state/hooks';
import { templatesRequest, templateRequestSuccess, templateRequestFailure } from '../../state/template';
import Banner from '../../components/banner/banner';
import { saveDefaultState } from '../../helpers/storage';



function Landing() {

    useEffect(()=>{
        getAllTemplates()
        // eslint-disable-next-line 
    },[])

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state)=>state.templateReducer.loading);


    
    const getAllTemplates = () =>{
        return new Promise((resolve)=>{
            // set loading state to true
            dispatch( templatesRequest(true) )

            api.getTemplates().then((res)=>{
                // set templates
                dispatch( templateRequestSuccess(res.data.slice(0,2000)) )
                saveDefaultState( res.data.slice(0,2000) )

            }).catch((err)=>{
                // incase error occurs while fetching templates 
                dispatch( templateRequestFailure(false) )
            })
        })
    }

    return (
        <div>
            {   
                isLoading 
                ? 
                    <LoadingScreen />
                :
                <>
                    <SearchAndSort />
                    <Banner />
                    <Templates />
                </>
            }
        </div>
    )
}

export default Landing;
