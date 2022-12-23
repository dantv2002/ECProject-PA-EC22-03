import { Button, Col, Empty, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeNotiTab, getAllNoti } from '../../../../redux/usernotification/userNotificationSlice'
import {ArrowDownOutlined} from '@ant-design/icons';


export const Notification = () => {
  const dispatch = useDispatch()

  const { notiList, notiActiveTab } = useSelector(store => store.userNotification)

  const [navigateTab, setNavigateTab] = useState({
    all: "active",
    info: "",
    invitation: ""
  })

  const [realNotiList, setRealNotiList] = useState([])

  const findNotiList = async () => {
    if (notiActiveTab === "info") {
      await setRealNotiList(notiList.filter((item) => item.type === "0"))
    } else if (notiActiveTab === "invitation") {
      await setRealNotiList(notiList.filter((item) => item.type === "1"))
      fixNotiDescription()
    } else {
      await setRealNotiList(notiList)
      fixNotiDescription()
    }
  }

  const fixNotiDescription = () => {
      realNotiList.forEach(item => {
      if(item.type === "1") {
        // let tempDesArray = item.description.split(" ")
        // tempArray.push( {
        //   ...item,
        //   description1: tempDesArray[0] + " " + tempDesArray[1] + " " + tempDesArray[2],
        //   description2: tempDesArray[3] + " " + tempDesArray[4] + " " + tempDesArray[5] + " " + tempDesArray[6] + " ",
        //   description3: tempDesArray[7] + " " + tempDesArray[8] + " " + tempDesArray[9] + " " + tempDesArray[10] + " " + tempDesArray[11] + " " + tempDesArray[12] + " " + tempDesArray[13] 
        // })
        
      }else{
      
      }
    })
  
  }

    
  
    

  const renderNoti = () => (
    realNotiList.map((noti) => (
      <li key={noti.id}>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} className="item-info">
            <img src={'.' + noti.imageUrl} />
          </Col>
          <Col xs={16} sm={16} md={16} lg={16} xl={16} className="item-info no-center">
            {noti.type === "0" ? 
            <span>Bạn vừa được mời vào một phiên đấu giá của sản phẩm <Link>{noti.productName}</Link></span> 
            : 
            <span>
              Sản phẩm 
              <Link> {noti.productName} </Link>
              của phiên đấu giá 
              <Link> {noti.auctionId} </Link>
          
              <span style={{color: "red"}}><ArrowDownOutlined /> Đã bị Giảm</span>
            </span>
            }
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="item-info">{noti.date}</Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="item-info delete" >Delete</Col>
        </Row>
      </li>
    ))
  )

  useEffect(()  =>  {
    findNotiList()
   
  }, [navigateTab])

  return (
    <div className="user-notification">
      <h1>My Notification</h1>
      <div className="noti-info">
        <div className="navigation">
          <div
            className={`tab ${navigateTab.all}`}
            onClick={() => {
              setNavigateTab({
                all: "active",
                info: "",
                invitation: ""
              })
              dispatch(changeNotiTab("all"))
            }}
          >
            ALL
          </div>
          <div
            className={`tab ${navigateTab.info}`}
            onClick={() => {
              setNavigateTab({
                all: "",
                info: "active",
                invitation: ""
              })
              dispatch(changeNotiTab("invitation"))
            }}
          >
            Info Notification
          </div>
          <div
            className={`tab ${navigateTab.invitation}`}
            onClick={() => {
              setNavigateTab({
                all: "",
                info: "",
                invitation: "active"
              })
              dispatch(changeNotiTab("info"))
            }}
          >
            Auction Invitation
          </div>
        </div>
        <ul>
          {renderNoti().length === 0 ? 
         <Empty
         image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
         style={{padding: "30px"}}
         imageStyle={{
           height: 60,
         }}
         description={
           <span>
              You don't have any notification
           </span>
         }
       >
        
       </Empty>:
         renderNoti()
        }
        </ul>
      </div>
    </div>
  )
}
