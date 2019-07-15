using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PortfolioProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult BasicMath()
        {
            return View();
        }

        public ActionResult Factorial()
        {
            return View();
        }

        public ActionResult Palindrome()
        {
            return View();
        }

        public ActionResult FizzBuzz()
        {
            return View();
        }

        public ActionResult SumOfAllFears()
        {
            return View();
        }

        public ActionResult Skills()
        {
            return View();
        }

        public ActionResult Portfolio()
        {
            return View();
        }

        public ActionResult Education(){
            return View();
        }
    }
}