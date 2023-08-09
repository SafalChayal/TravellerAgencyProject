using AutoFixture;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelWebApi.Controllers;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace APITESTING
{
    [TestClass]
    public class TravellerControllerTest
    {
        private Mock<ITraveller> _repoMock;
        private Fixture _fixture;
        private TravellerController _controller;

        public TravellerControllerTest() { 
            _fixture = new Fixture();
            _repoMock = new Mock<ITraveller>();

        }

        [TestMethod]
        public void Get_Traveller_Test()
        {
            var travellerlist = _fixture.CreateMany<Traveller>(5).ToList();
            _repoMock.Setup(repo => repo.GetTravellers()).Returns(travellerlist);
            _controller = new TravellerController(_repoMock.Object);

            var result = _controller.GetAllTravellers();

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(OkObjectResult)); 
            var okResult = result as OkObjectResult;
            Assert.AreEqual(200, okResult.StatusCode);



        }

        [TestMethod]
        public void Post_Traveller_Test()
        {
            var traveller = _fixture.Create<Traveller>();
            //_repoMock.Setup
        }
    }
}
