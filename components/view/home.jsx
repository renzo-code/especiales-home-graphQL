import React, { useState, useMemo } from 'react'

import styled from 'styled-components'
import { path, prop, isEmpty, clone } from 'ramda'

import SelectImage from '../Types/SelectImage'
import SelectText from '../Types/SelectText'
import SelectImageTxt from '../Types/SelectImageTxt'
import SelectOptions from 'components/Types/SelectOptions'
import SelectVideos from '../Types/SelectVideos'
import { IMAGE_TEXT, IMAGE_TEXT_BOX, TEXT, VIDEO, IMAGE } from 'const'
import YourSelection from 'components/YourSelection'

const ViewHome = ({ dataShow, dataGet }) => {
  const [ arrYourSelection, setArrYourSelection ] = useState([])

  const titlePrincipal = prop("body", prop("data", path("0", prop("get", dataGet))))
  const imagePrincipal = prop("path", prop("multimedia", prop("data", path("0", prop("get", dataGet)))))
  const countTrivias = prop("count", prop("questions", path("0", prop("get", dataGet))))

  const ArrayTrivias = prop("items", prop("questions", prop("show", dataShow)))
  // console.log('ArrayTrivias: ', ArrayTrivias);

  const containerStyleFondo = {
    backgroundImage: `url(${imagePrincipal})`,
    padding: "400px 100px",
    textAlign: "center",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative"
  }

  const captureData = (index, arr, ind) => {
    let objYourSelection = {}
    objYourSelection = {
      'indexTrivia': index,
      'idReponse': ind,
      'title': arr?.text,
    }
    
    if (isEmpty(arrYourSelection)){
      setArrYourSelection([...arrYourSelection, objYourSelection])
      return
    }

    let existObject = false
    const copyArrYourSelection = clone(arrYourSelection)

    arrYourSelection.forEach((item, i) => {
      // console.log('asd', arr, i, ind)
      if(item?.indexTrivia === index){
        existObject = true
        console.log('arrYourSelection: 1', copyArrYourSelection);
        copyArrYourSelection.splice(i, 1)
        console.log('arrYourSelection: 2', copyArrYourSelection);
        setArrYourSelection([...copyArrYourSelection, objYourSelection])
      }
    })

    if (existObject) return
    setArrYourSelection([...arrYourSelection, objYourSelection])

  }
  console.log('arrYourSelection', arrYourSelection);

  const typeComponent = {
    [VIDEO]: (item, i) => <SelectVideos
              key={i}
              onClick={captureData}
              index={i}
              title={item?.title}
              typeVideo={item?.options?.items}
            />,
    [IMAGE_TEXT]: (item, i) => <SelectImageTxt
                    key={i}
                    onClick={captureData}
                    index={i}
                    title={item.title}
                    typeImageText={item?.options?.items}
                    dataImg={item?.data?.multimedia}
                  />,
    [TEXT]: (item, i) => <SelectText
              key={i}
              onClick={captureData}
              index={i}
              title={item?.title}
              typeTxt={item?.options?.items}
            />,
    [IMAGE_TEXT_BOX]: (item, i) => <SelectImage
                        onClick={captureData}
                        key={i}
                        index={i}
                        title={item?.title}
                        typetxtImageBox={item?.options?.items}
                        
                      />,
    [IMAGE]: (item, i) => <SelectOptions
                        key={i}
                        onClick={captureData}
                        index={i}
                        title={item?.title}
                        typeImage={item?.options?.items}
                      />
  }

  return (
    <>
      <div id='fondo' className='fondo' style={containerStyleFondo}>
        <h2 className='title-principal'>{titlePrincipal}</h2>
      </div>

      {
        ArrayTrivias &&
        ArrayTrivias.map((item, i) => {
          return (
            <>{ typeComponent[item?.options?.type](item, i)}</>
          )
        })
      }

      <YourSelection
        arrayResponse={arrYourSelection ? arrYourSelection : {}}
      />

      <style jsx>{`
        .fondo:before{
          content:'';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0,0,0,.48);
        }
        .title-principal{
          position: absolute;
          width: 93%;
          bottom: 20%;
          left: 3%;
          color: #fff;
          font-family: Lato, sans-serif;
          font-size: 40px;
          font-weight: 800;
          text-transform: uppercase;
          text-align: start;
          text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
        }
        .img-principal{
          height: 100%;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ViewHome
