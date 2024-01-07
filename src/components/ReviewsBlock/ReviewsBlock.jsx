import {Avatar, Card, Flex, Rate, Skeleton} from "antd";
import Meta from "antd/es/card/Meta";

const ReviewsBlock = ({reviews, index, CategoryTitle}) => { return(
    <div key={index} >
        <a name={"c"+index}></a>
        <h2>{CategoryTitle}</h2>
        <h6>Всего {reviews.length} отзывов в данной категории</h6>

        {reviews.map((review) => (
            <Card 
                style={{ width: "50vw", marginTop: 16 }}
                key={review.postId}
            >
                <Skeleton loading={false} avatar active>
                <Flex>
                <Meta
                    avatar={<Avatar/>} 
                    title={review.name}
                    description={review.body}
                    style={{ width: "35vw",margin: "0 3vw 0 0",}}
                />
                <Rate disabled defaultValue={2+Math.floor(Math.random() * 3)} />
                </Flex>
                </Skeleton>
                
            </Card>
            ))}
                         
    </div>
    );
    
}       

/* src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" */
export default ReviewsBlock;
