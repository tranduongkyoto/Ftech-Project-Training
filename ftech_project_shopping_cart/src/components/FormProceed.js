import React, { useContext, useState } from 'react';
import { Form, FormField, TextInput, Box, Button, Text, TableHeader, TableBody, Table, TableCell, TableRow } from 'grommet';
import { Dialog } from '@material-ui/core';
import AppContext from '../context/AppContext';
export default function FormProceed({ total }) {
	const [value, setValue] = useState({
		name: "",
		email: "",
		phoneNum: "",
		address: "",
	});

	const [show, setShow] = useState(false);
	const { changeForm } = useContext(AppContext);
	return (
		<div>
			<Form
				value={value}
				enablereinitialize="true"
				onChange={nextValue => setValue(nextValue)}
				onReset={() => setValue({})}
				onSubmit={({ value }) => {
					console.log(value);
					setShow(true);
					setValue(value);
				}}
			>
				<FormField name="name" htmlFor="text-input-id" label="Name"
				//required="true"
				>
					<TextInput id="text-input-id" name="name" />
				</FormField>
				<FormField name="phoneNum" htmlFor="phonenumber-input-id" label="PhoneNumber"
				//required="true"
				>
					<TextInput id="phonenumber-input-id" name="phoneNum" />
				</FormField>
				<FormField name="address" htmlFor="address-input-id" label="Address"
				//required="true"
				>
					<TextInput id="address-input-id" name="address" />
				</FormField>
				<Box direction="row" gap="medium" justify="center">
					<Button type="submit" primary label="Submit" />
					<Button type="reset" label="Reset" />
					<Button
						label="Cancel"
						onClick={() => { changeForm() }}
					>
					</Button>
				</Box>
			</Form>
			{
				show && (
					<Dialog
						open={show}
						onClose={() => setShow(false)}
					>
						<Table>
							<TableHeader>
								<Box>
									<Text
										textAlign="center"
										style={{
											fontWeight: "bold"
										}}
									>
										You has been order succeed!
									</Text>
								</Box>

								{/* <Text
									style={{
										fontWeight: "bold"
									}}
								>
									Your order
								</Text> */}
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell><Text>Name</Text></TableCell>
									<TableCell><Text>{value.name}</Text></TableCell>
								</TableRow>
								<TableRow>
									<TableCell><Text>Phone Number</Text></TableCell>
									<TableCell><Text>{value.phoneNum}</Text></TableCell>
								</TableRow>
								<TableRow>
									<TableCell><Text>Email</Text></TableCell>
									<TableCell><Text>{value.email}</Text></TableCell>
								</TableRow>
								<TableRow>
									<TableCell><Text>Total</Text></TableCell>
									<TableCell><Text>{`${total} $`}</Text></TableCell>
								</TableRow>
							</TableBody>
						</Table>

					</Dialog>
				)
			}
		</div>

	)
}
