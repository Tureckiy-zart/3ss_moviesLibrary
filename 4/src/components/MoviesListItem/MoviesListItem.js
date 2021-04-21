import React from "react";
import { Link } from "react-router-dom";
// import styles from "./MoviesListItem.module.css";

export default function MoviesListItem({ item, location }) {
  const { id, title, name, original_title, vote_average, poster_path } = item;
  return (
    // <li className={styles.ListItem}>
    <li>
      <Link
        to={{
          pathname: `/movies/${id}`,
          // search: "?category=adventure",
          hash: `#${original_title}`,
          state: { from: location },
        }}
      >
        <h2>{original_title}</h2>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w154/${poster_path}`
              : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
          }
          alt={title ? title : name}
          width="154"
        />
        <p> Votes {vote_average}</p>
      </Link>
    </li>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MoviesListItem({ item, location }) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia className={classes.media}
//         // image={item.poster_path}
//         // title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {item.original_title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Votes {item.vote_average}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export const MoviesListItem = ({ item, location }) => {
//   const { id, title, name, original_title, vote_average, poster_path } = item;
//   return (
//     <li className={styles.ListItem}>
//       <Link
//         to={{
//           pathname: `/movies/${id}`,
//           search: "?category=adventure",
//           hash: `#${original_title}`,
//           state: { from: location },
//         }}
//       >
//         <h2>{original_title}</h2>
//         <img
//           src={
//             poster_path
//               ? `https://image.tmdb.org/t/p/w154/${poster_path}`
//               : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
//           }
//           alt={title ? title : name}
//           width="154"
//         />
//         <p> Votes {vote_average}</p>
//       </Link>
//     </li>
//   );
// };
