import styles from './MoviesListItem.module.css'

import React from 'react'
const CastListItem = ({item:{character, profile_path, name}}) => (
  //  <li className={styles.ListItem}>
   <li >
        <h2>{name}</h2>
        <p>Character: {character}</p>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w154/${profile_path}`
              : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
          }
          alt={name ? name : "No-name"}
          width="154"
        />
      </li>
);

export default CastListItem;
// =======================================================================
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function CastListItem() {
//   const classes = useStyles();
  
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           // image=`https://image.tmdb.org/t/p/w154/${profile_path}`
//           title="Contemplative Reptile"
//           />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default CastListItem;