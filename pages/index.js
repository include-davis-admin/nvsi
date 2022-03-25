import { useState } from 'react/cjs/react.development'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/aboutPage.module.css'

import PillarCard from '../components/about/pillarCard'
import AssociateProfile from '../components/about/associateProfile'
import PopupInfo from '../components/about/popupWindow'


const PopUp = (setPopUp, { Name, PicPath, colorHexCode, Email, Info }) => {
  return (
    <>
      <div className={styles.colorBG} style={{ backgroundColor: colorHexCode }} onClick={() => setPopUp(false)} />
      <div className={styles.modal}>
        <PopupInfo Name={Name} PicPath={PicPath} colorHexCode={colorHexCode} Email={Email}
          Info={Info}
        />
      </div>
    </>
  )
}


const person1Data = {
  Name: "Kieu Linh Valverde",
  PicPath: '/images/about/placeholder.png',
  colorHexCode: '#345707',
  Email: "cvalverde@ucdavis.edu",
  Info: "Dr. Kieu-Linh Caroline Valverde is Associate Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative at the University of California, Davis. She was a Fulbright, Rockefeller, and Luce scholar. Her teaching, research, and organizing interests include: Higher Education, Southeast Asian American history and contemporary issues, Mixed Race and Gender theories, Social Movements, Fashionology, National Branding, Spirit Realm, Diaspora, and Transnationalism studies. She authored Transnationalizing Viet Nam: Community, Culture, and Politics in the Diaspora (Temple University Press 2012). She founded the movement Fight the Tower with women of color and in the academy and co-edited the anthology, Fight the Tower: Asian American Women Scholars’ Resistance and Renewal in the Academy (Rutgers University Press 2020). Professor Valverde is working on curating an exhibit on youth culture and development in contemporary Viet Nam through the lens of Viet Nam’s national dress, the ao dai. She is also working on her third manuscript, which will examine national (re)branding projects with a focus on Viet Nam’s development in the area of sustainability and sovereignty. Her future research project looks at spirit realm beliefs and the history of its exclusion from the US academy, as well as the importance of its return."
}

export default function Home () {
  const [isPopUp, setPopUp] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>MISSION</h1>
        <div className={styles.headerBody}>
          The New Viet Nam Studies Initiative at UC Davis promotes research in the sciences and social sciences on contemporary Viet Nam – domestically, and internationally – with a focus on economic and political development in addition to arts and culture. We bring together scholars from around the world for collaborative research, symposia, conferences, forums, performances, curricula, and publications. Academic programming and activities focus on the reformation of Viet Nam’s cultural-political identity as it moves towards having a greater role economically in the world.
        </div>

        <div className={styles.pillarHeader}>
          <Link href="/">
            <a className = {styles.pillarHeaderText}>OUR PILLARS</a>
          </Link>
        </div>
      </div>

    <div className={styles.pillarContainer}>
        <PillarCard CardTitle={'Student-Partnered Initiative'} IconPicPath={'/images/about/pillar1.svg'} />
        <PillarCard CardTitle={'Promote Research & Publication'} IconPicPath={'/images/about/pillar2.svg'} />
        <PillarCard CardTitle={'Provide Innovative Programming'} IconPicPath={'/images/about/pillar3.svg'} />
        <PillarCard CardTitle={'Bring together scholars, industry experts, government officials, activists, and artists '} IconPicPath={'/images/about/pillar4.svg'} />
      </div>

      <div className = {styles.whiteSpaceContainer}>
        <div className={styles.donateRectangle}>
          <div className="Donate">DONATE
            <div className="To-our-mission">TO OUR MISSION</div>
          </div>
          <div className="Where">Where the money can go to or do...</div>
          <a href="https://www.google.com" className="Donate-Button"></a>
        </div>

        <div className = {styles.associatesListSectionContainer}>
          <div className = {styles.associatesListTitle}>ASSOCIATES LIST</div>
          <div className = {styles.listContainer}>
            <div className = {styles.profileColumn1}>
              <AssociateProfile associateName={'Kieu Linh Valverde'} description = {'Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative'} iconPicPath = {'/'}></AssociateProfile>
              <AssociateProfile associateName = {'Angie Pham'} description = {'Research Assistant | Junior studying Psychology, Asian American Studies, Physics @ UC Davis'} iconPicPath = {'/'}></AssociateProfile>
            </div>
            <div className = {styles.profileColumn2}>
              <AssociateProfile associateName={'Iris Vang'} description = {'Research Assistant | Senior studying Psychology @ UC Davis'} iconPicPath = {'/'}></AssociateProfile>
            </div>
          </div>
        </div>
        {/* Put div that cause the pop up here */}
        {/* <div className="What ever Name you like" onMouseOver={() => setPopUp(true)}> */}
          {/* <button>Move mouse accross this to see effects</button> */}
          {/* <p>Test paragraph, can be replaced with pictures or anything you like (or just remove). Move mouse over this text to see effects!</p>
          {isPopUp && PopUp(setPopUp, person1Data)} */}
        {/* </div> */}
      </div>

      <div className="contact_rectangle">
        <div className="keep">Keep posted  with NVSI</div>
        <div className="update"> Update on events | How to get involve | Contact us directly</div>
        <div className="emailname_rectangle">
          <div className="email_rectangle"></div>
        </div>
      </div>
    </div>
  )
}
