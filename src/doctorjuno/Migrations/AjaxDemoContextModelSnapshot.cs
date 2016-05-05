using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using doctorjuno.Models;

namespace doctorjuno.Migrations
{
    [DbContext(typeof(AjaxDemoContext))]
    partial class AjaxDemoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("doctorjuno.Models.Destination", b =>
                {
                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<int>("Id");

                    b.HasKey("City");

                    b.HasAnnotation("Relational:TableName", "Destinations");
                });
        }
    }
}
