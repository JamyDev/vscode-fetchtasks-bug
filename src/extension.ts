import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	const disp = vscode.commands.registerCommand('fetchtasks-bug.findTasks', async () => {
		console.log('FetchTasksBug: Triggered findTasks');

		const filteredTasks = await vscode.tasks.fetchTasks({type: 'shell'})
		vscode.window.showInformationMessage(`Found ${filteredTasks.length} tasks using type: 'shell' filter`);
		const tasks = await vscode.tasks.fetchTasks()
		const actualShellTasks = tasks.filter(t => t.definition.type === 'shell')
		vscode.window.showInformationMessage(`Found ${actualShellTasks.length} tasks using .fetchTasks().filter(t => t.definition.type === 'shell')`);
	})

	context.subscriptions.push(disp)

}

export function deactivate() {}
