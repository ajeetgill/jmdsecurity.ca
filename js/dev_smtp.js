// insertHTMLdialoginPage();

function sendEmail() {

  const quoteForm = document.forms.getQuote;
  const formFields = quoteForm.elements;

  const sendEmailTo = 'contact@jmdsecurity.ca';
  const sendEmailFrom = 'leads@netpe.in';
  const customerName = formFields.name.value;
  const customerEmail = formFields.email.value;
  const customerPhoneNumber = formFields.phone.value;
  const emailSubject = `Quote Request from : ${customerName}`;
  const emailBody = `
  ${customerName}<br>
  ${customerPhoneNumber}<br>
  ${customerEmail}<br><br>
  Message:<br>
  ${formFields.comment.value}
  `;
  /**
   * I've got two solutions for form submission
   * - formspree which is free only upto 50submissions per month + the redirect (https://formspree.io/thanks?language=en)
   * - elasticemail - which is free but goes can go-to spam initially.
   * - staticforms - the issue is - I don't know the limits OR how to get rid of the return message(https://api.staticforms.xyz/submit){"message":"Email Sent","success":true}
   * https://www.freecodecamp.org/news/handling-static-forms-the-client-side-way/
   * - or just redirect to google forms
   * 
   * In terms of their paid plans
   * - elastic email is like 
   */

  //testing -- start 
  // const sendEmailTo = 'forsharedprojects@gmail.com';
  // const sendEmailFrom = 'leads@netpe.in';
  // const customerName = 'Ajeet';
  // const customerEmail = 'ajeetshergill@gmail.com';
  // const customerPhoneNumber = '+919988776655';
  // const emailSubject = `Quote Request from : ${customerName}`;
  // const emailBody = `test email`;
  // console.log(`sending email....`);
  //testing -- over 


  Email.send({
    SecureToken: "ab82c0bc-f94f-418a-a65f-7319a83d4bd2",    // port 2525 use ssl w/ smtp.elasticemail.com leads@netpe.in
    To: sendEmailTo,
    From: sendEmailFrom,
    FromName: customerName,
    ReplyAddress: customerEmail,
    Subject: emailSubject,
    Body: emailBody
  }).then(
    message => {
      message == 'OK' ? swal("Email Delivered Successfully!", "We\'ll contact you shortly!\nThank you.", "success") :
        swal("Something went wrong!", "Try calling us instead!! \n Kindly, also let us know email didn't work!", "error");


      message == 'OK' && quoteForm.reset();
      // message == 'OK' ? () => {
      //   analytics.logEvent('form_submission', { 'status': 'success' });
      //   quoteForm.reset();
      // } : () => analytics.logEvent('form_submission', { 'status': 'fail' });
    }
  );
}