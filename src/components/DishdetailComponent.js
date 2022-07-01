import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class Dishdetail extends React.Component {
	componentDidMount() {
		console.log("Dishdetail Component componentdidmount invoked");
	}

	componentDidUpdate() {
		console.log("Dishdetail Component componentdidupdate invoked");
	}

	renderDish(dish) {
		return (
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	renderComments(comments) {
		if (comments !== null) {
			return (
				<div className="col-12 col-md-5 m-1">
					<h4> Comments </h4>
					<ul className="list-unstyled">
						{comments.map((comment) => {
							return (
								<li key={comment.id}>
									<p>{comment.comment}</p>
									<p>
										-- {comment.author},{" "}
										{new Intl.DateTimeFormat("en-US", {
											year: "numeric",
											month: "long",
											day: "2-digit",
										}).format(new Date(comment.date))}
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			);
		} else {
			return <div></div>;
		}
	}

	render() {
		console.log("Dishdetail component render invoked");
		if (this.props.dish != null)
			return (
				<div className="container">
					<div className="row">
						{this.renderDish(this.props.dish)}
						{this.renderComments(this.props.dish.comments)}
					</div>
				</div>
			);
		else return <div></div>;
	}
}

export default Dishdetail;
