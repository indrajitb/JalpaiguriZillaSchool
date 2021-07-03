import React, { useEffect, useState } from 'react';
import {
  IonContent, IonFab, IonFabButton, IonFabList, IonIcon,
  IonLabel, IonPage
} from '@ionic/react';
import { logoFacebook, logoTwitter, logoWhatsapp, shareSocial } from 'ionicons/icons';
import SwiperCore, { Navigation, Pagination, SwiperOptions, Thumbs, Controller, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import classes from './Home.module.css';

import Header from '../components/Header';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';
import GalleryItem from '../components/GalleryItem';
import { dataURItoBlob } from '../utils/image-conversions';

interface HomeProps {
  getAuthData(): any,
  setAuthData(): any,
  history: any,
  loggedIn: boolean,
  name: string,
  email: string
}

const Home: React.FC<HomeProps> = (props: HomeProps): JSX.Element => {

  const [thumbsSwipper, setThumbsSwipper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [more, setMore] = useState(false);

  const { files } = useTypedSelector(state => state.carouselData);
  const { getCarouselData } = useActions();
  const schoolLogo = 'assets/school-logo.jpg';


  SwiperCore.use([Navigation, Pagination, Thumbs, Controller, Autoplay]);

  const slideOptions: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    watchSlidesProgress: true,
    speed: 1000,
    init: true,
    height: 100,
    resistance: false,
    spaceBetween: 500,
    autoHeight: true,
  };

  const handleMore = () => {
    setMore(!more);
  }


  const openAppsWebAPI = async () => {
    if (webAPISupported()) {
      let newNav: any;

      // const response: any = await fetch('../images/logo.png');
      const response: any = await fetch('/assets/school-pic.jpg');
      const blob = await response.blob();
      const file = new File([blob], 'share.jpg', { type: blob.type });

      // console.log(response, blob, file);

      // const blob = dataURItoBlob('../images/logo.png');

      // let file = new File([blob], "picture.jpg", { type: 'image/png' });
      // let filesArray = [];
      // filesArray.push(file);

      const shareData = {
        title: 'Jalpaiguri Zilla School',
        text: 'Welcome to Jalpaiguri Zilla School\'s website(unofficial)',
        url: 'https://www.jalpaigurizillaschool.in',
        files: [file]
      }

      try {


        navigator.share(shareData);

      } catch (err) {
        console.error('Error sharing link: ' + err)
      }

    } else {
      // console.log('Web API NOT Supported! ');
    }
  }

  const webAPISupported = (): boolean => {
    let newNav: any;

    // newNav = window.navigator;
    if (navigator && navigator.share)
      return true;
    else return false;
  }

  const openSocial = async (provider: string) => {

    if (provider === 'Facebook') {
      window.open("https://www.facebook.com/sharer.php?u=https%3A%2F%2Fjalpaigurizillaschool.in", "_blank");
    }

    if (provider === 'Twitter') {
      window.open("https://twitter.com/intent/tweet?url=https%3A%2F%2Fjalpaigurizillaschool.in", "_blank");
    }

    if (provider === 'WhatsApp') {
      window.open("whatsapp://send?text=https%3A%2F%2Fjalpaigurizillaschool.in", "_blank", "data-action=share/whatsapp/share");
    }
  }

  useEffect(() => {
    const runOnce = async () => {

      await getCarouselData();

    }

    runOnce();
  }, []);


  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>

        {/* <div className={classes.imagetext}> */}

        <img className={classes.logo} src={schoolLogo} alt=" " />

        {/* <br /><br /> */}

        <h1 className={classes.heading1}>Jalpaiguri Zilla School</h1>

        <br /><br />

        <h2 className="ion-padding-start ion-padding-end"><b>About</b></h2>

        <p className="textStyle ion-padding-start ion-padding-end">
          {/* <IonImg src="../public/assets/school-logo.jpg"></IonImg> */}
          <IonLabel className={classes.a}>Jalpaiguri Zilla School</IonLabel> was established in 1876 and is one of the best known
          educational institutions of Jalpaiguri as well as West Bengal. The landmark red brick main building is
          located on the bank of River Teesta.
        </p>
        <p className="textStyle ion-padding-start ion-padding-end">
          Jalpaiguri Zilla School has about 30 classrooms and six laboratories. Five of these are for physics, chemistry, biology, computer (Linux) and geography. The last is ATL Lab (Atal Bihari Vajpayee science lab). It is a sophisticated science laboratory, the first ATL lab made in Jalpaiguri district.
          <br /> <br />
          The school has two playgrounds (their areas are 8603m² and 3896m²). The larger is used for
          cricket, football, and athletics. The second field is for hockey.
          <br />
          A mid-day meal is served to the students. &nbsp;&nbsp;&nbsp;

          <a className={classes.more} onClick={handleMore} hidden={more}>More...</a>
        </p>


        {/* <div className={classes.carousel}> */}

        {/* </div> */}
        {/* <br /><br /><br /><br /><br /> */}
        <div hidden={!more}>

          <h2 className="ion-padding-start ion-padding-end"><b>Awards and Recognitions</b></h2>

          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Jalpaiguri Zilla School became the champion on 16 February 2018, beating all government schools of West Bengal, at the 9th All Bengal Inter Government Schools' Sports Meet 2017-2018 in SAI complex, Salt Lake, Kolkata. This is an athletics championship. Jalpaiguri Zilla School finished with 11 gold medals, 2 silvers and 1 bronze.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Nilabja Das and Mrinmay Mandal secured a joint 3rd position in Madhyamik examination 2018.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Granthan Sengupta ranked 1st in the HS exam 2018, scoring 496 out of 500.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Kaushik Sikdar, the zoology teacher, won the Siksharatna award in 2018.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            On January 30, 2019, Jalpaiguri Zilla School became the 1st runners up in the 10th All Bengal Inter Government Schools' Sports Meet, 2018-2019, in Salt Lake, Kolkata, with 4 golds, 9 silvers and 2 bronze medals.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Ayushman Nandi became the champion in U-17 School Badminton Championships in October 2019. He took part in the national level, with becoming the leader of the West Bengal team.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Soumyabrata Mukhopadhyay became one of the greatest child scientists of India on 31 December 2019 in 27th National Children's Science Congress 2019, in Tiruvananthapuram, ranking at the top 25 of the country.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Jalpaiguri Zilla School won the state level YPC on January 13, 2020 in Kolkata.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            On February 2, 2020, Jalpaiguri Zilla School became the 1st runners up in the 11th All Bengal Inter Government Schools' Sports Meet, 2019-2020, in Murshidabad, with 4 golds, 5 silvers and 7 bronze medals.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Securing 1st place in the district level NCSC 2019, Soumyabrata Mukhopadhyay took part in the State Congress in Kolkata, on Feb 28, 2020.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            Barunaditya Saha secured the 8th position in Madhyamik examination 2020, getting 685 marks.
          </p>
          <p className="textStyle ion-padding-start ion-padding-end">
            <span className="bullet"></span>
            In the HS exam 2020, four from this school ranked in merit list. They were Mrinmay Mandal(5th), Nilabja Das(7th), Debojit Sarkar(9th) and Agniva Saha(10th).
            &nbsp;&nbsp;&nbsp;
            <a className={classes.more} onClick={handleMore} hidden={!more}>Less...</a>
          </p>


        </div>

        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwipper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          spaceBetween={15}
          navigation
          pagination
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
        >

          {files.map((item, index) => {

            return (
              <SwiperSlide key={`slide-${index}`} tag="li">
                <GalleryItem fileKey={item.key} hideDetails={true} />
              </SwiperSlide>
            )
          })}


        </Swiper>


        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          {webAPISupported() ?
            <>
              <IonFabButton onClick={openAppsWebAPI}>
                <IonIcon icon={shareSocial} />
              </IonFabButton>
            </>

            :
            <>
              <IonFabButton color="primary">
                <IonIcon icon={shareSocial} />
              </IonFabButton>
              <IonFabList side="top" hidden={webAPISupported()}>
                <IonFabButton color="twitter" onClick={async () => await openSocial('Twitter')} >
                  <IonIcon icon={logoTwitter} />
                </IonFabButton>
                <IonFabButton color="facebook" onClick={async () => await openSocial('Facebook')} >
                  <IonIcon icon={logoFacebook} />
                </IonFabButton>
                <IonFabButton color="facebook" onClick={async () => await openSocial('WhatsApp')} >
                  <IonIcon icon={logoWhatsapp} />
                </IonFabButton>
              </IonFabList>
            </>}
        </IonFab>

      </IonContent>
    </IonPage >
  );
};

export default Home;