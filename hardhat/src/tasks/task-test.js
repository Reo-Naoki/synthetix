//
// task('test')
// 	.addFlag('optimizer', 'Compile with the optimizer')
// 	.addFlag('gas', 'Compile gas usage')
// 	.addFlag('ovm', 'Run tests on the OVM using a custom OVM provider')
// 	.addFlag('native', 'Compile with the native solc compiler')
// 	.addOptionalParam('gasOutputFile', 'Gas reporter output file')
// 	.addOptionalParam('grep', 'Filter tests to only those with given logic')
// 	.setAction(async (taskArguments, hre, runSuper) => {
// 		const { gas, grep, ovm, native, gasOutputFile } = taskArguments;
//
// 		if (ovm) {
// 			hre.ovm = true;
//
// 			console.log(gray('Compiling and running tests in the OVM...'));
// 			hre.config.solc = {
// 				path: path.resolve(__dirname, 'node_modules', '@eth-optimism', 'solc'),
// 			};
// 			await hre.config.startOvmNode();
// 			if (!grep) {
// 				console.log(gray(`Ignoring test specs containing`, yellow('@ovm-skip')));
// 				hre.config.mocha.grep = '@ovm-skip';
// 				hre.config.mocha.invert = true;
// 			}
// 			hre.config.mocha.timeout = 10000000;
// 		}
//
// 		if (native) {
// 			hre.config.solc.native = true;
// 		}
//
// 		optimizeIfRequired({ hre, taskArguments });
//
// 		if (grep) {
// 			console.log(gray('Filtering tests to those containing'), yellow(grep));
// 			hre.config.mocha.grep = grep;
// 		}
//
// 		if (gas) {
// 			console.log(gray(`Enabling ${yellow('gas')} reports, tests will run slower`));
// 			hre.config.gasReporter.enabled = true;
// 			if (!grep) {
// 				console.log(gray(`Ignoring test specs containing`, yellow('@gas-skip')));
// 				hre.config.mocha.grep = '@gas-skip';
// 				hre.config.mocha.invert = true;
// 			}
// 			// Tell buidler-gas-reporter not to wrap provider when using ganache
// 			if (hre.network.name === 'localhost') {
// 				hre.config.gasReporter.fast = false;
// 			}
// 		}
//
// 		if (gasOutputFile) {
// 			hre.config.gasReporter.outputFile = gasOutputFile;
// 		}
//
// 		await runSuper(taskArguments);
// 	});
//