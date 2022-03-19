import React,{useEffect} from 'react';
import SearchAndSort from '../../components/searchAndSort/searchAndSort'
import Templates from '../../components/templates/templates';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';
import api from '../../api';
import { useAppDispatch,useAppSelector } from '../../state/hooks';
import { templatesRequest, templateRequestSuccess, templateRequestFailure } from '../../state/template';
import Banner from '../../components/banner/banner';
import { saveDefaultState } from '../../helpers/storage';
import style from './landing.module.scss'



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
                dispatch( templateRequestSuccess(res.data ) )
                saveDefaultState( res.data)

            }).catch((err)=>{
                // incase error occurs while fetching templates 
                dispatch( templateRequestFailure(false) )
            })
        })
    }

    // const getAllTemplates = async () =>{
    //     try{

    //         dispatch( templatesRequest(true) )
    //         const templates = await api.getTemplates();
    //         console.log(templates)
    //         saveDefaultState( templates.data)
    //         dispatch( templateRequestSuccess(templates.data ) )

    //     }catch(error){
    //         dispatch( templateRequestFailure(false) )
    //     }
    // }

    return (

        <div className={style.landing}>
            <div className={style.landing__in}>
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

            
        </div>
    )
}

export default Landing;
