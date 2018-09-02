import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Tool = (props) => {
    return (
        <div>
            { props.tool ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%' }}
                        image={props.tool.fields.toolImage.fields.file.url}
                        title={props.tool.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.tool.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.tool.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.tool.fields.url} target="_blank">
                            Go To Tool
                        </Button>
                    </CardActions>
                </Card>
            ): null }
        </div>
    )
}

export default Tool;