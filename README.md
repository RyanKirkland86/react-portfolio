# React Portfolio

## Project:

This is a portfolio created using React. There is a landing page with basic contact info, a header with a brand, and a footer with important links. The header and footer persist no matter where you navigate in the app. When you land on the projects page, the contents dynamically update using one project component for each project in the portfolio.

[Deployed Link](https://ryankirkland86.github.io/react-portfolio/)

![Image](https://github.com/RyanKirkland86/react-portfolio/blob/main/react-portfolio/public/img/ReactPortfolioLandingPage.png)

## Technologies Used:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [JSON](https://www.json.org/json-en.html)
- [Bulma](https://bulma.io/)
- [React](https://reactjs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Process:

In the following example, the work page dynamically loads as many projects as has been added to the projects.json array, using a single component. Each unique object in the array is rendered separately on the page.

```javascript
class Project extends Component {
    render() {
    return (
        <div className="tile is-ancestor">
        {this.props.projects.map(({ id, title, description, image, github, website}) => (
            <div className="tile" key={id}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={image} alt={title}></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">
                                    <a href={website}>
                                        Deployed Link
                                    </a>
                                </p>
                                <p>
                                    <a href={github}>
                                        <i className="fab fa-github fa-3x"></i>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="content">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )}
}
```

## Deployed Link:

[Deployed Link](https://ryankirkland86.github.io/react-portfolio/)

## Authors:

- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This project is licensed under the MIT License.

## Acknowledgements:

Thank you to UCB Extension for the help with this project.