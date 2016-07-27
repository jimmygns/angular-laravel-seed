<!DOCTYPE html>

<html lang="en">
<head>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

  <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>


  <style>

    nav { 
     margin-bottom: 70px; 

   }


 </style>
</head>

<body ng-app="app">
  

  <div ui-view>

  </div>




</body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js"></script>
<script src="app/js/angular-local-storage.min.js"></script>

<script src="app/app.js"></script>
<script src="app/app.router.js"></script>
<script src="app/app.navcontroller.js"></script>

<script src="app/admin/admin.router.js"></script>
<script src="app/admin/admin.js"></script>

<script src="app/admin/admin.auth/admin.auth.js"></script>
<script src="app/admin/admin.auth/admin.auth.controller.js"></script>
<script src="app/admin/admin.auth/admin.auth.router.js"></script>

<script src="app/admin/admin.dashboard/admin.dashboard.js"></script>
<script src="app/admin/admin.dashboard/admin.dashboard.router.js"></script>
<script src="app/admin/admin.dashboard/admin.dashboard.controller.js"></script>
<script src="app/admin/admin.dashboard/admin.dashboard.service.js"></script>

<script src="app/user/user.js"></script>
<script src="app/user/user.router.js"></script>
<script src="app/user/user.auth/user.auth.js"></script>
<script src="app/user/user.auth/user.auth.controller.js"></script>
<script src="app/user/user.auth/user.auth.router.js"></script>

<script src="app/user/user.dashboard/user.dashboard.js"></script>
<script src="app/user/user.dashboard/user.dashboard.router.js"></script>
<script src="app/user/user.dashboard/user.dashboard.controller.js"></script>



<script src="app/shared/services/auth.js"></script>
<script src="app/shared/constants/constants.js"></script>


</html>
