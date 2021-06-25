using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(destination => destination.ProductBrand, options => options.MapFrom(s => s.ProductBrand.Name))
                .ForMember(destination => destination.ProductType, options => options.MapFrom(s => s.ProductType.Name))
                .ForMember(destination => destination.PictureUrl, options => options.MapFrom<ProductUrlResolver>());
            CreateMap<Address, AddressDto>();
        }
    }
}