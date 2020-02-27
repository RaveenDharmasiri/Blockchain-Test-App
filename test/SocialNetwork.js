const SocialNetwork = artifacts.require('./SocialNetwork.sol');

require('chai')
	.use(require('chai-as-promised'))
	.should()


contract('SocialNetwork', ([deployer, author, tipper]) => {
	let socialNetwork;

	before(async () => {
		socialNetwork = await SocialNetwork.deployed();
	}); 

	describe('deployment', async () => {
		it('deploys successfully', async () => {
			const address = await socialNetwork.address;
			assert.notEqual(address, 0x0);
			assert.notEqual(address, '');
			assert.notEqual(address, null);
			assert.notEqual(address, undefined);
		});

		it('has a name', async() => {
			const name = await socialNetwork.name();
			assert.equal(name, 'Dapp University Social Network');
		})
	});

	describe('posts', async () => {

		let result;

		it('creates posts', async () => {
			result = await socialNetwork.createPosts('', { from: author });
			postCount = await socialNetwork.postCount();

			//SUCCESS
			assert.equal(postCount, 1);
			const event = result.logs[0].args;

			//FAILURE : Post must have content
			await socialNetwork.createPosts('', { from: author }).should.be.rejected;

		});

		it('lists posts', async () => {

		});

		it('allows users to tip', async () => {

		});
	})
});