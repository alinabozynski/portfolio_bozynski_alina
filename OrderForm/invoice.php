<?php
	// Create the error message
	$error_message = "The form could not be processed.";

	// Create item names array
	$items = ["", "MacBook", "The Razer", "WD My Passport", "Nexus 7", "DD-45 Drums"];

	// Create item costs array
	$cost = [0, 1899.99, 79.99, 179.99, 249.99, 119.99];

	// Create a variable for the total cost
	$total_cost = 0;

	// Determines if the variables above exist after the validation
	function filterinput(){
		$errors = 0;

		// Email validation
		if(!preg_match('/\A[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\Z/', $_POST['email'])){
			$errors += 1;
		}

		// Postal code validation
		if(!preg_match('/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/', $_POST['postal'])){
			$errors += 1;
		}

		// Credit card validation

		// Card number validation
		if(!ctype_digit($_POST['cardnumber']) || !preg_match('#^\d{10}$#', $_POST['cardnumber'])){
			$errors += 1;
		}

		// Card expiration date validation

		// Month validation
		if(!preg_match('/^(1[0-2]|[1-9])$/', $_POST['month'])){
			$errors += 1;
		}

		// Year validation
		if($_POST['year'] < date("Y") || $_POST['year'] > (date("Y")+5) || !filter_input(INPUT_POST, 'year', FILTER_VALIDATE_INT)){
			$errors += 1;
		}

		// Card type validation
		// Card types presented to the user are VISA, Mastercard, and AmEx
		// So, the type cannot be left blank
		if(empty($_POST['cardtype'])){
			$errors += 1;
		}

		// Full name field cannot be left blank
		if(empty($_POST['fullname'])){
			$errors += 1;
		}

		// Card name field cannot be left blank
		if(empty($_POST['cardname'])){
			$errors += 1;
		}

		// Address field cannot be left blank
		if(empty($_POST['address'])){
			$errors += 1;
		}

		// City field cannot be left blank
		if(empty($_POST['city'])){
			$errors += 1;
		}

		// Province validation
		if(preg_match('- Province -', $_POST['province'])){
			$errors += 1;
		}

		// Validate quantity intputs as integers
		if(!empty($_POST['qty1']) && !ctype_digit($_POST['qty1'])){
			$errors += 1;
		}

		if(!empty($_POST['qty2']) && !ctype_digit($_POST['qty2'])){
			$errors += 1;
		}

		if(!empty($_POST['qty3']) && !ctype_digit($_POST['qty3'])){
			$errors += 1;
		}

		if(!empty($_POST['qty4']) && !ctype_digit($_POST['qty4'])){
			$errors += 1;
		}

		if(!empty($_POST['qty5']) && !ctype_digit($_POST['qty5'])){
			$errors += 1;
		}

		return $errors;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Thank you for your order!</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<div class="invoice">
		<?php if(filterinput() != 0): ?>
			<h2><?= $error_message ?></h2>

		<?php else: ?>
			<h1>Thanks for your order, <?= $_POST['fullname'] ?>!</h1>
			<h3> Here's a summary of your order:</h3>
			<table>
				<tbody>
					<tr>
						<td colspan="4"><h3>Address Information</h3></td>
					</tr>
					<tr>
						<td class="right">Address:</td>
						<td><?= $_POST['address'] ?></td>
						<td class="right">City:</td>
						<td><?= $_POST['city'] ?></td>
					</tr>
					<tr>
						<td class="right">Province:</td>
						<td><?= $_POST['province'] ?></td>
						<td class="right">Postal Code:</td>
						<td><?= $_POST['postal'] ?></td>
					</tr>
					<tr>
						<td class="right"  colspan="2">Email:</td>
						<td colspan="2"><?= $_POST['email'] ?></td>
					</tr>
				</tbody>
			</table>
			<table>
				<tbody>
					<tr>
						<td colspan="3"><h3>Order Information</h3></td>
					</tr>
					<tr>
						<td>Quantity</td>
						<td>Description</td>
						<td>Cost</td>
					</tr>
						<?php for($count = 1; $count <= 5; $count++): ?>
						<?php if(!empty($_POST['qty' . $count])): ?>
							<tr>
								<td><?= $_POST['qty' . $count] ?></td>
								<td><?= $items[$count] ?></td>
								<td class="right"><?= $cost[$count]*$_POST['qty' . $count] ?></td>
								<?php $total_cost += $cost[$count]*$_POST['qty' . $count] ?>
							</tr>
						<?php endif ?>
						<?php endfor ?>
					<tr>
						<td colspan="2" class="right">Total</td>
						<td class="right">$ <?= number_format($total_cost, 2) ?></td>
					</tr>
				</tbody>
			</table>
		<?php endif ?>
	</div>
</body>
</html>