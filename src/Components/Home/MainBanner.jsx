import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import subBannerImage from "../../assets/Home/Group 262.png";
import starIcon from "../../assets/Home/north-star-24.png";
import map from '../../assets/Home/map.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const MainBanner = () => {
  return (
    <Box p={2}>
      {/* 1st Seaction */}
      <Box sx={banner}>
        <Typography variant="p">
          Nous réunissons experts du monde entier et organisations en Afrique
        </Typography>
      </Box>
      <Box sx={subBanner}>
        <Box>
          <Typography variant="p" sx={bannerPara1}>
            Organisations en Afrique
          </Typography>
          <Typography sx={bannerPara2}>
            Vous êtes une entreprise privée ou publique basée en Afrique et vous
            avez du mal à recruter des profils expérimentés? Vous êtes une
            start-up africaine et vous souhaitez faire appel aux services d'un
            prestataire externe? Vous recherchez une expertise spécifique pour
            réaliser un futur projet? Grâce à son réseau, PANDA vous aide à
            trouver les experts dont vous avez besoin!
          </Typography>
        </Box>
        <Box>
        <img src={subBannerImage} alt="" className="banner-img1" style={{width:{xs:'50%',md:'100%'}}}/>
        </Box>
        <Box>
          <Typography variant="p" sx={bannerPara1}>
            Experts
          </Typography>
          <Typography sx={bannerPara2}>
            Vous êtes un professionnel expérimenté et vous planifiez de partir
            travailler en Afrique? Vous vous rendez souvent sur le continent
            africain pour des raisons professionnelles et vous souhaitez étendre
            votre réseau? Vous souhaitez partager votre expertise avec des
            organisations africaines sans vous déplacer? PANDA est la plateforme
            de networking des experts pour la réalisation de leurs projets
            professionnels sur le continent africain!
          </Typography>
        </Box>
      </Box>
      {/* 2st Seaction */}
      <Box>
        <Typography sx={sectSecPara1}>Missions de PANDA</Typography>
        <Box>
          <Box sx={secSecBox}>
            <Box sx={sectSecBox1}>
              <Typography sx={{ ...sectSecPara3, margin: "2rem 0" }}>
                01
              </Typography>
              <Typography sx={sectSecPara2} mb={2}>
                Networking
              </Typography>
              <Typography sx={sectSecPara3}>
                Faciliter la mise en réseau “networking” entre les organisations
                situées en Afrique et les experts et entrepreneurs africains et
                internationaux.
              </Typography>
            </Box>
            <Box sx={sectSecBox1}>
              <Typography sx={{ ...sectSecPara3, margin: "2rem 0" }}>
                02
              </Typography>
              <Typography sx={sectSecPara2} mb={2}>
                Partage
              </Typography>
              <Typography sx={sectSecPara3}>
                Promouvoir le partage de connaissances et d’expertises.
              </Typography>
            </Box>
            <Box sx={sectSecBox1}>
              <Typography sx={{ ...sectSecPara3, margin: "2rem 0" }}>
                03
              </Typography>
              <Typography sx={sectSecPara2} mb={2}>
                Recrutement
              </Typography>
              <Typography sx={sectSecPara3}>
                Augmenter la visibilité des offres d’emploi en Afrique et
                faciliter le recrutement de professionnels qualifiés.
              </Typography>
            </Box>
            <Box sx={sectSecBox1}>
              <Typography sx={{ ...sectSecPara3, margin: "2rem 0" }}>
                04
              </Typography>
              <Typography sx={sectSecPara2} mb={2}>
                Collaborations
              </Typography>
              <Typography sx={sectSecPara3}>
                Créer des opportunités de collaborations en Afrique.
              </Typography>
            </Box>
            <Box sx={sectSecBox1}>
              <Typography sx={{ ...sectSecPara3, margin: "2rem 0" }}>
                05
              </Typography>
              <Typography sx={sectSecPara2} mb={2}>
                Evénements
              </Typography>
              <Typography sx={sectSecPara3}>
                Augmenter la visibilité des évenements autour du “Business in
                Africa”.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 3st Seaction */}
      <Box>
        <Typography>Fonctionnalités</Typography>
        <Box sx={{display:{xs:'flex'},flexWrap:{xs:'wrap',md:'nowrap'}}}>
          <Box sx={sectThiBox}>
            <Box
              sx={sectThiBox1}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <Typography mt={4}>
                <img src={starIcon} alt="" className="" />
              </Typography>
              <Typography sx={sectThirPara1}>Sélection de profils</Typography>
              <Typography sx={sectSecPara3}>
                Faciliter la mise en réseau “networking” entre les organisations
                situées en Afrique et les experts et entrepreneurs africains et
                internationaux.
              </Typography>
            </Box>
            <Box
              sx={sectThiBox1}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <Typography mt={4}>
                <img src={starIcon} alt="" className="" />
              </Typography>
              <Typography sx={sectThirPara1}> Publication</Typography>
              <Typography sx={sectSecPara3}>
              Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée !
              </Typography>
            </Box>
            <Box
              sx={sectThiBox1}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <Typography mt={4}>
                <img src={starIcon} alt="" className="" />
              </Typography>
              <Typography sx={sectThirPara1}>tRAVEL MAP</Typography>
              <Typography sx={sectSecPara3}>
              Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! 
              </Typography>
            </Box>
            <Box
              sx={sectThiBox1}
              style={{ display: "flex", flexDirection: "column", gap: "2rem",borderEndEndRadius:'100px',borderStartEndRadius:'unset',borderStartStartRadius:'unset',borderEndStartRadius:'100px' }}
            >
              <Typography mt={4}>
                <img src={starIcon} alt="" className="" />
              </Typography>
              <Typography sx={sectThirPara1}>Filtres & recherche avancée</Typography>
              <Typography sx={sectSecPara3}>
              Ciblez vos recherches par secteur d'activité, pays et plus encore. 
              </Typography>
            </Box>
            <Box
              sx={sectThiBox1}
              style={{ display: "flex", flexDirection: "column", gap: "2rem",borderEndEndRadius:'100px',borderStartEndRadius:'unset',borderStartStartRadius:'unset',borderEndStartRadius:'100px' }}
            >
              <Typography mt={4}>
                <img src={starIcon} alt="" className="" />
              </Typography>
              <Typography sx={sectThirPara1}>NOTIFICATIONS</Typography>
              <Typography sx={sectSecPara3}>
              Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.
              </Typography>
            </Box>
          </Box>
          <Box >
            <img src={map} alt="" />
            <Box textAlign={'center'}>
            <button className="sectThiBtn" >Explorer la Travel Map</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainBanner;
{
  /* 1st Seaction */
}
const banner = {
  width: {
    md: "1100px",
    xs:'280px'
  },
  height: {
    md: "181px",
    xs:'83px'
  },
  textAlign: {
    md: "center",
    xs:'center'
  },
  color: {
    md: "#1F1F1F",
  },
  fontSize: {
    md: "65px",
    xs:'20px'
  },
  margin: {
    md: "auto",
    xs:'auto'
  },
};

const subBanner = {
  display: {
    xs:'flex',
    md: "flex",
  },
  flexWrap:{
    xs:'wrap',
    md:'nowrap'
  },
  alignItems: {
    xs:'center',
    md: "center",
  },
  gap: {
    xs:'1rem',
    md: "1rem",
  },
};

const bannerPara1 = {
  color: {
    md: "#A95454",
    xs:'#A95454'
  },
  fontSize: {
    md: "20px",
    xs:'20px'
  },
  fontWeight: {
    md: "500",
    xs:'500'
  },
  opacity: {
    md: "0.19",
    xs:'0.19'
  },
};
const bannerPara2 = {
  color: {
    md: "#1F1F1F",
  },
  fontSize: {
    md: "15px",
    xs:'13px'
  },
  fontWeight: {
    md: "500",
    xs:'400'
  },
  opacity: {
    md: "0.19",
  },
};
{
  /* 2st Seaction */
}
const sectSecPara1 = {
  color: {
    md: "#1F1F1F",
  },
  fontSize: {
    md: "65px",
  },
  fontWeight: {
    md: "500",
  },
  fontFamily: {
    md: "Jost",
  },
};
const sectSecPara2 = {
  color: {
    md: "#1F1F1F",
  },
  fontSize: {
    md: "40px",
  },
  fontWeight: {
    md: "500",
  },
  fontFamily: {
    md: "Jost",
  },
};
const sectSecPara3 = {
  fontSize: {
    md: "13px",
  },
  fontWeight: {
    md: "400",
  },
  color: {
    md: "#1f1f1f1",
  },
};
const secSecBox = {
  display: {
    md: "flex",
  },
  justifyContent: {
    md: "space-between",
  },
  gap: {
    md: "1rem",
  },
};
const sectSecBox1 = {
  textAlign: {
    md: "center",
  },
  border: {
    md: "1px solid red",
  },
  width: {
    md: "290px",
  },
  height: {
    md: "288px",
  },
  padding: {
    md: "0.5rem",
  },
  borderStartEndRadius: {
    md: "100px",
  },
  borderStartStartRadius: {
    md: "100px",
  },
};

/* 3st Seaction */
const sectThiBox1 = {
  textAlign: {
    md: "center",
  },
  border: {
    md: "1px solid",
  },
  width: {
    md: "238px",
  },
  height: {
    md: "313px",
  },
  padding: {
    md: "0.5rem",
  },
  borderStartEndRadius: {
    md: "100px",
  },
  borderStartStartRadius: {
    md: "100px",
  },
};
const sectThirPara1 = {
  color: {
    md: "#1F1F1F",
  },
  fontSize: {
    md: "18px",
  },
  fontWeight: {
    md: "500",
  },
  fontFamily: {
    md: "Jost",
  },
  textTransform: {
    md: "uppercase",
  },
};
const sectThiBox={
  width:{
    md:'60%'
  },
  display:{
    md:'flex'
  },
  flexWrap:{
    md:'wrap'
  },
  gap:{
    md:'2rem'
  }
}
const sectThiBtn={
  width:{
    md:'327px'
  },
padding:{
  md:'18px 40px'
},
borderRadius:{
  md:'35px'
},
border:{
  md:'0.5px solid #1F1F1F'
}
}