using PortfolioProject.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
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

    public ActionResult Contact()
        {
            EmailModel model = new EmailModel();
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var from = model.FromName + "," + $"{model.FromEmail}<{ConfigurationManager.AppSettings["emailto"]}>"; //THe name and address of the person who entered it.

                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = model.Subject, //The subject of the email.
                        Body = model.Body, //The body of the email.
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
            //Console.WriteLine("Message has been sent");
            //return View("Index", "BlogPosts"); //Does not work
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

        public ActionResult Portfolio()
        {
            return View();
        }
    }
}