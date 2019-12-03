import React from "react";
import fetchAuthor from "../../../services/fetchAuthor";
import NameCard from "./NameCard";
import AddressCard from "./AddressCard";
import CompanyCard from "./CompanyCard";
import "./AuthorPage.css";
import BackLink from "../BackLink";
class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.match.params.id;
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    } else {
      return (
        <div>
          <BackLink />
          <NameCard author={this.state.author} />
          <AddressCard author={this.state.author} />
          <CompanyCard author={this.state.author} />
        </div>
      );
    }
  }
  async getAuthor() {
    const author = await fetchAuthor(this.userId);
    this.setState({ loading: false, author });
  }
  componentDidMount() {
    this.getAuthor();
  }
  componentWillReceiveProps(nextProps) {
    this.userId = nextProps.match.params.id;
    this.getAuthor();
  }
}

export default AuthorPage;
